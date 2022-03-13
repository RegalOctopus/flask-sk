from sqlalchemy.orm import declarative_base, sessionmaker
from sqlalchemy import Column, Integer, String, Float, create_engine
import os

BASE_DIR = os.path.dirname(os.path.realpath(__file__))
conn = "sqlite:///"+os.path.join(BASE_DIR, 'dataset.db')+'?check_same_thread=False'
engine = create_engine(conn, echo=True)
Base = declarative_base()
session = sessionmaker()
class Training(Base):
    """Training Dataset"""
    __tablename__='training'
    id = Column(Integer(), primary_key=True)
    text = Column(String(500), nullable=False)
    label = Column(Integer(), nullable=False)

    def __repr__(self):
        return 'text: {}, label: {}'.format(self.text, self.label)

class Prior(Base):
    """Logprior"""
    __tablename__='prior'
    id = Column(Integer(), primary_key=True)
    logprior = Column(Float(), nullable=False)

    def _repr_(self):
        return 'logprior: {}'.format(self.logprior)

class Likelihood(Base):
    """Loglikelihood"""
    __tablename__='likelihoods'
    id = Column(Integer(), primary_key=True)
    text = Column(String(500), nullable=False)
    loglikelihood = Column(Float(), nullable=False)
    
    @property
    def serialize(self):
        return {'text': self.text, 'loglikelihood': self.loglikelihood}

    def __repr__(self):
        return 'text: {}, likelihood: {}'.format(self.text, self.loglikelihood)