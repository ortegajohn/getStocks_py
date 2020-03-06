from flask import Flask, json, request
import json
import requests

api = Flask(__name__)

arry = []

@api.route('/companies', methods=['GET'])
def get_companies():
    print("SEND_data::::", arry)
    send_this_array = arry
    return json.dumps(send_this_array)

@api.route('/companies', methods=['POST'])
def post_companies():
    this_test = request.form
    again = request.form.to_dict()
    qqqqq = request.json
    y = json.loads(qqqqq)

    a = requests.get("https://www.worldtradingdata.com/api/v1/stock?symbol=" + y['ticker'] + "&api_token=NwKKaeNpI8lA9hVpjtqqdvqYWWqHf7EMegaRidS6DdgdwVja8b67OyCdH9n7")
    aa = a.text
    z = json.loads(aa)
    print("data::::", z["data"])
    arry.append(z["data"])

    return json.dumps({"success": True}), 201

if __name__ == '__main__':
    api.run()

