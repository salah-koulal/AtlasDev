# AtlasDev e-Learning web app

AtlasDev is a web application that allows users to sign up, log in, and manage their favorite courses. The application is built using Flask, a lightweight web framework for Python, and MongoDB for data storage.

## Team Members

- [Meriem Ben Ayad](https://www.linkedin.com/in/meriem-benayad/): Back-end Developer
- [Salah Koulal](https://www.linkedin.com/in/salah-koulal-ab2523264/): Front-end Developer
- [Mouad Nait](https://www.linkedin.com/in/mouad-nait-si-017b73200/): DevOps

## Features

- User Registration and Authentication
- Course Management
- User Favorites
- User Profile Management
- Notes managment

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- `Python 3.x`
- `MongoDB`
- `Flask`
- `Flask-Login`
- `Flask-Bcrypt`
- `Flask-WTF`
- `Flask-PyMongo`
- `PyMongo`
- `Blinker`
- `Click`
- `dnspython`
- `itsdangerous`
- `Jinja2`
- `MarkupSafe`
- `passlib`
- `Werkzeug`
- `wheel`

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/salah-koulal/AtlasDev.git
   ```

2. Navigate to the project directory:

   ```
   cd AtlasDev
   ```

3. Create a virtual environment and activate it:

   ```
   python3 -m venv atlas_env
   source atlas_env/bin/activate
   ```

4. Install the required packages:

   ```
   pip install -r requirements.txt
   ```

5. Set the `FLASK_APP` environment variable:

   ```
   export FLASK_APP=app.py
   ```

6. Set the `FLASK_ENV` environment variable:

   ```
   export FLASK_ENV=atlas_env
   ```

7. Import the MongoDB database from the atlasdb.json file:

   ```
   mongoimport --db atlas_db --collection users --file atlasdb.json --jsonArray
   mongoimport --db atlas_db --collection courses --file atlasdb.json --jsonArray
   mongoimport --db atlas_db --collection favorites --file atlasdb.json --jsonArray
   ```

8. Run the Flask application:
   ```
   flask run
   ```

### Running the Application

To run the application, use the following command:

```
FLASK_APP=app.py FLASK_ENV=atlas_env flask run
```

This will start the Flask development server. You can then access the application in your web browser at `http://localhost:5000`.

### Testing with Postman

To test the application using `Postman`, you can send HTTP requests to the various endpoints provided by the application. Here are some examples:

- **User Registration**: `POST /signup`
- **User Login**: `POST /signin`
- **User Logout**: `GET /logout`
- **User Profile**: `GET /profile`
- **Update User Profile**: `PUT /profile`
- **Get Favorite Courses**: `GET /favorites/<user_id>`
- **Add Favorite Course**: `POST /favorites/<course_id>`
- **Remove Favorite Course**: `DELETE /favorites/<course_id>`
- **Get Courses by Category**: `GET /courses/<category>`

Make sure to replace `<user_id>` and `<course_id>` with actual user and course IDs.

## Contributing

Contributions are welcome! Please read the [CONTRIBUTING.md](CONTRIBUTING.md) for details on how to contribute to this project.

## Acknowledgments

- Flask for providing a lightweight and flexible web framework.
- MongoDB for providing a powerful and scalable database solution.
- All the contributors who have helped shape this project.
