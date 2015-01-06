#-*- coding:utf-8 -*-

import sys;
sys.path.append('static/userData')

from userData import users

def getUserData():
    print users

getUserData()
