from flask import Flask

app = Flask(__name__)


@app.route("/")
def home():
    return """
    <h1>DevOps Deployment Lab 🚀</h1>
    <p>Python application successfully deployed behind Nginx.</p>
    """


@app.route("/health")
def health():
    return {
        "status": "healthy",
        "service": "python-flask"
    }


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000)
