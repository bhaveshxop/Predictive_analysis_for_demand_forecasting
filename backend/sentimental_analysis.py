import requests

def get_sentiment(text):
    url = "https://api.worqhat.com/api/ai/content/v2"

    prompt = """Can you analyze the following review, and give me the what is the experience of the user form the following: (Excellent, Good, Avarage, bad, worst) give me a single word answer Text: """

    payload = {
        "question": prompt + text,
    }
    headers = {
        "Authorization": "Bearer sk-6a7a97a15b264511bb54b99318d73d99",
        "Content-Type": "application/json"
    }

    response = requests.request("POST", url, json=payload, headers=headers)

    response_json = response.json()
    content = response_json['content']
    return content
