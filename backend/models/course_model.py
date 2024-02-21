#!/usr/bin/python3
"""  """
from .base_model import BaseModel
from flask import jsonify
import re


class Course(BaseModel):
    """  """

    def __init__(self, course_title=None, course_url=None, description=None, category=None, time=None):
        """  """
        super().__init__()
        self.course_title = course_title
        self.course_url = course_url
        self.description = description
        self.category = category
        self.time = time
        # Represent MongoDB Collection 'courses' to the class
        self.collection = self.get_collection()

    def get_courses(self, category):
        """ Retreive courses based on category """
        re_category = re.compile('^{}$'.format(category), re.IGNORECASE)
        courses = self.collection.find({'category': re_category})
        courses_list = []
        if courses is not None:
            for course in courses:
                courses_list.append({
                    # '_id': str(course['_id']),
                    'course_title': course['course_title'],
                    'course_url': course['course_url'],
                    'description': course['description'],
                    # 'category': course['category'],
                    'time': course['time']
                })
            return {category: courses_list}
        else:
            return []

    def get_all_categories(self):
        """ Retrieve all unique categories from the courses collection """
        categories = self.collection.distinct('category')
        return categories
