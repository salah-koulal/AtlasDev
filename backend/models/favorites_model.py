#!/usr/bin/python3
"""  """
from .base_model import BaseModel
from bson import ObjectId
from utils.database import get_db


class Favorite(BaseModel):
    """  """

    """ def __init__(self, user, course):
        """  """
        super().__init__()
        self.user = user._id  # This is the ObjectId from the 'users' collection
        if course is not None:
            self.course = course._id  # This is the ObjectId from the 'courses' collection
        else:
            self.course = None
        # Represent MongoDB Collection 'favorites' to the class
        self.collection = self.get_collection() """

    def __init__(self, user, course):
        """  """
        super().__init__()
        self.user = {
            '$ref': 'users',
            '$id': user._id,
            '$db': 'atlas_db'
        }
        if course is not None:
            self.course = {
                '$ref': 'courses',
                '$id': course._id,
                '$db': 'atlas_db'
            }
        else:
            self.course = None
        # Represent MongoDB Collection 'favorites' to the class
        self.collection = self.get_collection()

    def get_courses_by_user(self, user_id):
        """ Retrieve all courses for a specific user """
        # Debugging print : print(f"Attempting to find favorites for user_id: {user_id}")
        # Query using DBRef-like structure for user
        favorites_cursor = self.collection.find(
            {'users.$id': ObjectId(user_id)})
        favorites = list(favorites_cursor)  # Convert cursor to list
        # Debugging print: print(f"Favorites found for user {user_id}: {favorites}")
        db = get_db()
        courses = db.courses
        course_titles = []
        for favorite in favorites:
            # Adjust to access id property of DBRef
            course_id = favorite['courses'].id
            # Debugging print: print(f"Attempting to find course with id: {course_id}")
            course = courses.find_one({'_id': course_id})
            if course is not None:
                course_titles.append(course['course_title'])
            else:
                course_titles.append(f"Course with id {course_id} not found")
        return course_titles

    def insert_favorite(self, course_id):
        """ Add a course to a user's favorites """
        db = get_db()
        course = db.courses.find_one({'_id': ObjectId(course_id)})
        # debugging
        print(course['course_title'])
        if course is not None:
            self.course = {
                '$ref': 'courses',
                '$id': course['_id'],
                '$db': 'atlas_db'
            }
            favorite_course = self.collection.find_one({
                'users': self.user,
                'courses': self.course
            })

            if favorite_course is None:
                self.collection.insert_one({
                    'users': self.user,
                    'courses': self.course
                })
                return 'Course added to favorites'
            else:
                self.collection.delete_one({
                    'users.$id': self.user['$id'],
                    'courses.$id': course['_id']
                })
                return 'Course removed from favorites'

        else:
            raise ValueError('Course not found')

    def delete_favorite(self, course_id):
        """ Delete a course from a user's favorites """
        self.collection.delete_one(
            {'users.$id': self.user['$id'], 'courses.$id': ObjectId(course_id)})
