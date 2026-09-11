# =============================================
# Course Content Simplification Agent — Backend
# =============================================
# Framework: Flask (Python)
#
# This file is the entry point for the backend server.
# The AI simplification logic will be added here later.
# =============================================

from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow requests from the frontend


# --- Health Check Route ---
@app.route('/', methods=['GET'])
def health_check():
    """Simple health check to confirm the server is running."""
    return jsonify({'status': 'ok', 'message': 'Backend is running.'})


# --- Simplify Route (Placeholder) ---
@app.route('/simplify', methods=['POST'])
def simplify():
    """
    Receives course content and a proficiency level,
    and returns a simplified version of the content.

    Expected JSON body:
    {
        "level":   "beginner" | "intermediate" | "advanced" | "expert",
        "content": "<text to simplify>"
    }
    """
    data = request.get_json()

    if not data:
        return jsonify({'error': 'No JSON body received.'}), 400

    level = data.get('level', '').strip()
    content = data.get('content', '').strip()

    if not level:
        return jsonify({'error': 'Missing required field: level'}), 400

    if not content:
        return jsonify({'error': 'Missing required field: content'}), 400

    # --- TODO: Replace the placeholder below with real AI logic ---
    # This is where the IBM Granite / watsonx integration will go.
    placeholder_response = (
        f"[Placeholder] Simplified content for '{level}' level will appear here.\n\n"
        f"Original input received ({len(content)} characters)."
    )
    # --------------------------------------------------------------

    return jsonify({'simplified': placeholder_response})


# --- Run the App ---
if __name__ == '__main__':
    # debug=True enables auto-reload during development.
    # Set debug=False in production.
    app.run(debug=True, port=5000)
