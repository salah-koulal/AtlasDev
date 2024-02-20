#!/usr/bin/python3
"""  """
from .base_model import BaseModel
from bson import ObjectId


class Favorite(BaseModel):
    """  """

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
        favorites = self.collection.find({'user.$id': ObjectId(user_id)})
        for favorite in favorites:
            print(favorite)
        return [favorite['course']['$id'] for favorite in favorites if favorite is not None]

