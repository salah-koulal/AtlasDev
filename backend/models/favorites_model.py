#!/usr/bin/python3
"""  """
from base_model import BaseModel


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
        self.course = {
            '$ref': 'courses',
            '$id': course._id,
            '$db': 'atlas_db'
        }
        # Represent MongoDB Collection 'favorites' to the class
        self.collection = self.get_collection()
