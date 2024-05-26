from flask import Flask, render_template, request, redirect, url_for, session
from flask_mysqldb import MySQL	

app = Flask(__name__,_folder='.src/login_and_signup')

app.secret_key = 'your secret key'

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'XDR5tgb123@'
app.config['MYSQL_DB'] = 'geeklogin'

mysql = MySQL(app)

@app.route('/')
def home():
    if 'username' in session:
        return render_template('src/ai_page/Choose.jsx', username=session['username'])
    else:
        return render_template('src/ai_page/Choose.jsx')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        pwd = request.form['password']
        cur = mysql.connection.cursor()	
        cur.execute('SELECT username, password FROM accounts WHERE username = %s', (username,))
        user = cur.fetchone()
        cur.close()
        if user and pwd == user[1]:
            session['username'] = user[0]
            return redirect(url_for('choose'))
        else:
            return render_template('login.jsx', error='Invalid username or password')
    return render_template('login.jsx')


@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        username = request.form['username']
        pwd = request.form['password']
        email = request.form['email']
        
        cur = mysql.connection.cursor()
        cur.execute(f"insert into accounts (username,password, email) values ('{username}', '{pwd}', '{email}')")
        mysql.connection.commit()
        cur.close()
        return redirect(url_for('login'))
    return render_template('register.jsx')
if __name__ == '__main__':
    app.run(debug=True)
