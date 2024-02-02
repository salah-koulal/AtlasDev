#!/usr/bin/python3
"""  """
from utils.database import get_db
from bson import ObjectId

class BaseModel:
    """ Base class for all models with CRUD operations."""

    def __init__(self):
        """  """
        self._id = ObjectId()
        self.collection = None

    def create(self):
        """ Insert a new object """
        self.collection.insert_one(self.__dict__)

    @classmethod
    def read(cls, id):
        """ Retrieve objects """
        return cls.collection.find_one({'_id': ObjectId(id)})

    def update(self):
        """ Update an object within a collection """
        self.collection.update_one({'_id': self._id}, {'$set': self.__dict__})

    def delete(self):
        """ Delete an object from a collection """
        self.collection.delete_one({'_id': self._id})

    @classmethod
    def get_collection(cls):
        """ Get a collection """
        return get_db()[cls.__name__.lower() + 's']
