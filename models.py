from email import message
import string
from sqlalchemy import Boolean, Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from database import Base



class Contact(Base):
    __tablename__ = "contact"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    email = Column(String)
    phone = Column(String)
    complete = Column(Boolean, default=False)

    message = Column(String)
    # owner = relationship("Users", back_populates="todos")
