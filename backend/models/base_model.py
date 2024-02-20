#!/usr/bin/python3
"""  """
from utils.database import get_db
from bson import ObjectId
from flask import jsonify


class BaseModel:
    """ Base class for all models with CRUD operations."""

    def __init__(self):
        """ Initialize the model """
        self._id = ObjectId()
        self.collection = self.get_collection()

    def create(self):
        """ Insert a new object """
        self.collection.insert_one(self.to_dict())

    @classmethod
    def read(self):
        """ Retrieve objects from the collection """
        self.collection.find_one({'_id': self._id})

        # self.collection.update_one({'_id': ObjectId(self._id)}, {'$set': self.to_dict()})
    def update(self):
        """ Update an object within a collection """
        # Exclude the '_id' field from the update operation
        data_to_update = {k: v for k,
                          v in self.to_dict().items() if k != '_id'}

        try:
            # Fetch the document to ensure it exists
            doc = self.collection.find_one({'_id': ObjectId(self._id)})
            if doc is None:
                return jsonify({'No document found with _id': f'{self._id}'})

            result = self.collection.update_one({'_id': ObjectId(self._id)}, {
                '$set': data_to_update})

            if result.modified_count > 0:
                return True
            else:
                return jsonify({'message': 'No documents were updated.'})
        except Exception as e:
            return jsonify({'An error occurred while updating the document': {str(e)}})
            return False

    def delete(self):
        """ Delete an object from a collection """
        self.collection.delete_one({'_id': self._id})

    @classmethod
    def get_collection(cls):
        """ Get a collection """
        return get_db()[cls.__name__.lower() + 's']
