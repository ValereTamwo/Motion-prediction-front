import logging

def setup_logging():
    logging.basicConfig(level=logging.INFO, 
                        format='%(asctime)s %(levelname)s %(message)s', 
                        handlers=[logging.StreamHandler()])
    
def log_request(request):
    logging.info(f"Received request: {request.json}")

def handle_error(e):
    logging.error(f"An error occurred: {str(e)}")
    response = jsonify({'error': str(e)})
    response.status_code = 500
    return response
