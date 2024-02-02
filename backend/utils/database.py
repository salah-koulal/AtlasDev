#!/usr/bin/python3
"""  """
from pymongo import MongoClient


def get_db():
    """  """
    client = MongoClient("mongodb://localhost:27017/")
    db = client["atlas_db"]
    return db
