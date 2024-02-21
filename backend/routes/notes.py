#!/usr/bin/python3
"""  """
from flask import Blueprint

notes_views = Blueprint('notes', __name__)


@notes_views.route('/notes', methods=['GET'])
def get_notes_for_course():
    """ Retrieve all notes for a course """
    pass


@notes_views.route('/notes/<string:course_id>', methods=['POST'])
def set_note():
    """ Create a new note for a course """
    pass


@notes_views.route('/notes/<string:course_id>', methods=['PUT'])
def update_note():
    """ Update a note for a course """
    pass


@notes_views.route('/notes/<string:course_id>', methods=['DELETE'])
def delete_note():
    """ Delete a note for a course """
    pass
