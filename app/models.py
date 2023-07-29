```python
from datetime import datetime
from app import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), index=True, unique=True)
    messages = db.relationship('Message', backref='author', lazy='dynamic')

    def add_user(self):
        db.session.add(self)
        db.session.commit()

    def get_user(self, username):
        return User.query.filter_by(username=username).first()

class Message(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    body = db.Column(db.String(140))
    timestamp = db.Column(db.DateTime, index=True, default=datetime.utcnow)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))

    def add_message(self):
        db.session.add(self)
        db.session.commit()

    def get_messages(self):
        return Message.query.order_by(Message.timestamp.desc())
```