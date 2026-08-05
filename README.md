#  StellarClass AI - Stellar Object Classification System

## Overview

StellarClass AI is an Artificial Intelligence-based web application that classifies astronomical objects using machine learning techniques.

The system analyses astronomical observation parameters and predicts the class of an object as:

-  Star
-  Galaxy
-  Quasar (QSO)

The project combines a trained machine learning model with a Flask API backend and a web-based user interface to provide real-time astronomical classification.

---
The system includes:

- Exploratory Data Analysis (EDA)
- Machine Learning model training using Jupyter Notebooks
- Model evaluation and comparison
- Trained model deployment
- Flask REST API backend
- HTML/CSS/JavaScript frontend application
- User registration and login validation
- Prediction dashboard
- Prediction history management


---

The system accepts astronomical parameters:

- Alpha
- Delta
- U Magnitude
- G Magnitude
- R Magnitude
- I Magnitude
- Z Magnitude
- Redshift
- Spectral Type
- Galaxy Population

and predicts the astronomical object class.

---

## Machine Learning Models

The following machine learning models were developed and evaluated:

- Logistic Regression
- Decision Tree
- Random Forest

The final selected model:

```
best_model.pkl
```

is used for prediction.

---

##  Web Application Features

### User Authentication

- User Registration
- User Login
- Logout functionality
- Login validation


### Prediction Dashboard

Users can enter astronomical parameters and receive AI predictions.


### Prediction History

The application stores previous predictions and displays classification history.


### Help Page

Provides instructions for users on how to use the system.

---

#  System Architecture


```
                 User

                  |

                  |

          Frontend Web Application

                  |

                  |

             Flask API

                  |

                  |

       Machine Learning Model

                  |

                  |

        Stellar Classification

```


---

#  Project Structure


```
STELLER_CLASS

│
├── backend
│   │
│   └── app.py
│
│
├── dataset
│   │
│   ├── train.csv
│   ├── test.csv
│   ├── submission.csv
│   └── sample_submission.csv
│
│
├── frontend
│   │
│   ├── CSS
│   │
│   ├── dashboard.html
│   ├── help.html
│   ├── history.html
│   ├── login.html
│   ├── logout.html
│   ├── predict.html
│   ├── register.html
│   └── script.js
│
│
├── jupyter
│   │
│   ├── EDA.ipynb
│   ├── Model_best.ipynb
│   └── Traning.ipynb
│
│
├── models
│   │
│   ├── best_model.pkl
│   ├── decision_tree.pkl
│   ├── logistic_regression.pkl
│   └── random_forest.pkl
│
│
├── requirements.txt
│
└── README.md

```

---

#  Technologies Used

## Programming Language

- Python
-pip


## Backend

- Flask
- 


## Machine Learning

blinker==1.9.0
click==8.4.2
colorama==0.4.6
contourpy==1.3.3
cycler==0.12.1
Flask==3.1.3
flask-cors==6.0.5
fonttools==4.63.0
itsdangerous==2.2.0
Jinja2==3.1.6
joblib==1.5.3
kiwisolver==1.5.0
MarkupSafe==3.0.3
matplotlib==3.11.1
narwhals==2.24.0
numpy==2.4.6
packaging==26.2
pandas==3.0.5
pillow==12.3.0
pyparsing==3.3.2
python-dateutil==2.9.0.post0
scikit-learn==1.9.0
scipy==1.17.1
seaborn==0.13.2
six==1.17.0
threadpoolctl==3.6.0
tzdata==2026.3
Werkzeug==3.1.8



## Frontend

- HTML5
- CSS3
- JavaScript


## Development Environment

- Jupyter Notebook
- Visual Studio Code
- GitHub

---

#  Machine Learning Workflow


```
Astronomical Dataset

        ↓

Exploratory Data Analysis

        ↓

Data Cleaning

        ↓

Feature Engineering

        ↓

Data Preprocessing

        ↓

Model Training

        ↓

Model Evaluation

        ↓

Best Model Selection

        ↓

Flask Prediction API

        ↓

Web Application

```


## 2. Create Virtual Environment

```bash
python -m venv .venv
```

Activate:

### Windows

```bash
.venv\Scripts\activate
```

---

## 3. Install Dependencies

```bash
pip install -r requirements.txt
```

---

#  Running the Application


## Start Backend

Go to backend folder:

```bash
cd backend
```

Run Flask:

```bash
python app.py
```

Backend:

```
http://127.0.0.1:5000
```

---

## Run Frontend

Open:

```
frontend/login.html
```

Workflow:

```
Register
    ↓
Login
    ↓
Dashboard
    ↓
Enter Astronomical Parameters
    ↓
Prediction Result
    ↓
View History
```

---

# 🔬 Model Input Features


| Feature | Description |
|---|---|
| Alpha | Right Ascension coordinate |
| Delta | Declination coordinate |
| U Magnitude | Ultraviolet brightness |
| G Magnitude | Green wavelength brightness |
| R Magnitude | Red wavelength brightness |
| I Magnitude | Infrared brightness |
| Z Magnitude | Infrared brightness |
| Redshift | Distance measurement indicator |
| Spectral Type | Stellar classification category |
| Galaxy Population | Blue/Red galaxy population |

---

#  Model Files

The trained models are stored inside:

```
models/
```

Available models:

```
best_model.pkl
logistic_regression.pkl
decision_tree.pkl
random_forest.pkl
```

The deployed application uses:

```
best_model.pkl
```

for predictions.

---

#  Jupyter Notebooks

## EDA.ipynb

Contains:

- Dataset exploration
- Missing value analysis
- Feature analysis
- Data visualization


## Traning.ipynb

Contains:

- Data preprocessing
- Model training
- Model evaluation


## Model_best.ipynb

Contains:

- Final model selection
- Performance comparison
- Saving the best model

---

# Future Improvements

- Add deep learning models
- Add prediction confidence score
- Deploy using cloud services
- Add user database authentication
- Add interactive astronomical visualization
- Improve model performance using ensemble learning

---
# Author

  Praveen Charuka 
# License

This project is developed for educational and research purposes.