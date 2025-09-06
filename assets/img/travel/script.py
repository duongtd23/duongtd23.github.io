from PIL import Image
import os, argparse

# Max dimension
MAX_SIZE = 300

def process_folder(folder, prefix_filename, thumbnail_size):
    """
    :param folder:
    :param prefix_filename: e.g., "hiroshima", "toulouse"
    :return: make thumbnails for all .jpeg files inside folder $folder with prefix name $prefix_filename
    """
    for filename in os.listdir(folder):
        if filename.lower().endswith('.jpeg') and\
            filename.lower().startswith(prefix_filename):
            filepath = os.path.join(folder, filename)
            process_file(filepath, filename, folder, thumbnail_size)

def process_file(filepath, filename=None, folderpath=None, thumbnail_size=MAX_SIZE):
    if filename is None:
        filename = os.path.basename(filepath)
    if folderpath is None:
        folderpath = os.path.dirname(filepath)

    with Image.open(filepath) as img:
        w, h = img.size

        # Resize with aspect ratio preserved
        if w >= h:
            new_w = thumbnail_size
            new_h = int(h * thumbnail_size / w)
        else:
            new_h = thumbnail_size
            new_w = int(w * thumbnail_size / h)

        thumbnail = img.resize((new_w, new_h), Image.LANCZOS)

        # Save with "-300" suffix
        name, ext = os.path.splitext(filename)
        new_filename = f"{name}-{thumbnail_size}.jpeg"
        new_filepath = os.path.join(folderpath, new_filename)

        thumbnail.save(new_filepath, format="JPEG", quality=95)
        print(f"Thumbnails created: {new_filepath}")

def parse_args():
    parser = argparse.ArgumentParser(description='Thumbnail generator tool')
    parser.add_argument(
        'file_or_dir',
        help='Path to a single image file or directory containing multiple image files.'
    )
    parser.add_argument(
        'filename_prefix',
        help='Prefix of image files to be processed.'
    )
    parser.add_argument('-s', '--size',
                        help=f'thumbnail size. Default: {MAX_SIZE}')
    return parser.parse_args()

def main():
    cli_args = parse_args()
    thumb_size = int(cli_args.size) if cli_args.size else MAX_SIZE

    if os.path.isdir(cli_args.file_or_dir):
        process_folder(cli_args.file_or_dir, cli_args.filename_prefix, thumb_size)
    elif os.path.isfile(cli_args.file_or_dir):
        process_file(cli_args.file_or_dir, thumbnail_size=thumb_size)
    else:
        print("[ERROR] Provide a valid path to a single image file or directory.")

if __name__ == '__main__':
    main()