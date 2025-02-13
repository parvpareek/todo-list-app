from PIL import Image
import os

# List of image filenames
#image_numbers = [5, 13, 14, 15, 16, 17, 20, 21, 24, 25, 26]
image_numbers = [2]
image_filenames = [f"{num}.jpg" for num in image_numbers]

# Process each image
for filename in image_filenames:
    if os.path.exists(filename):
        with Image.open(filename) as img:
            rotated_img = img.rotate(+90, expand=True)  # Rotate right (clockwise)
            rotated_img.save(filename)  # Overwrite the original file
            print(f"Rotated {filename} successfully.")
    else:
        print(f"File {filename} not found.")
