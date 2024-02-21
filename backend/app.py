from flask import Flask
from flask_login import LoginManager
from routes import users
from routes import courses
from routes import notes
from routes import favorites
from routes import categories
from models.user_model import User
from utils.database import get_db
from bson.objectid import ObjectId
from flask_bcrypt import Bcrypt

app = Flask(__name__)
# Initialize Flask-Bcrypt
bcrypt = Bcrypt(app)

app.config['SECRET_KEY'] = 'thisisatlasdevsecretkey'

# Initialize Flask-Login
login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'users.signin_user'

# User loader callback


@login_manager.user_loader
def load_user(user_id):
    db = get_db()
    user_doc = db.users.find_one({'_id': ObjectId(user_id)})
    if not user_doc:
        return None
    # Create a User object with the _id from the database document
    user = User(user_doc['username'], user_doc['password'],
                user_doc['email'], user_doc.get('profile_image', None), is_hashed=True)
    user._id = user_doc['_id']
    return user


app.debug = True


app.register_blueprint(users.users_views)
app.register_blueprint(categories.categories_views)
app.register_blueprint(courses.courses_views)
app.register_blueprint(notes.notes_views)
app.register_blueprint(favorites.favorites_views)
