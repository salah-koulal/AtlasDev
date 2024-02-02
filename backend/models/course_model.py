#!/usr/bin/python3
"""  """
from base_model import BaseModel


class Course(BaseModel):
    """  """

    def __init__(self, course_title, course_url, description, category, time):
        """  """
        super().__init__()
        self.course_title = course_title
        self.course_url = course_url
        self.description = description
        self.category = category
        self.time = time
        # Represent MongoDB Collection 'courses' to the class
        self.collection = self.get_collection()
