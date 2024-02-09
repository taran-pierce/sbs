# TODO figure out how to fix this
# this does create me the files needed but its not valid
from cryptography.hazmat.primitives import serialization
from cryptography.hazmat.primitives.asymmetric import rsa
from cryptography.hazmat.backends import default_backend
from jwcrypto import jwk
import json

# Generate RSA key pair
private_key = rsa.generate_private_key(
    public_exponent=65537,
    key_size=2048,
    backend=default_backend()
)

# Get the public key in PEM format
public_pem = private_key.public_key().public_bytes(
    encoding=serialization.Encoding.PEM,
    format=serialization.PublicFormat.SubjectPublicKeyInfo
)

# Create JWK from PEM public key
jwk_key = jwk.JWK.from_pem(public_pem)

# Save JWK to file
with open("private.jwk", "w") as file:
    file.write(jwk_key.export(private_key=False))

# Convert JWK to dictionary
jwk_dict = jwk_key.export(private_key=False)

# Specify the filename for the JSON file
json_filename = "private.json"

# Write JWK dictionary to JSON file
with open(json_filename, "w") as json_file:
    json.dump(jwk_dict, json_file, indent=4)