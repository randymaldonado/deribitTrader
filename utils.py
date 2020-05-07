def saveConfig(data):
    """
    This function takes in the user inputed api key information and updates it in the .env file.

    :param data:
    :type JSON Object:
    """
    secret = data['apiSecret']
    key = data['apiKey']
    file = open('.env', 'w')
    file.write(f'API_KEY={key}')
    file.write(f'API_SECRET={secret}\n')
    file.close()
