# Check argument
if [ -z "$1" ]; then
  echo "Usage: $0 /d/Revature_Training/1-Linux/Challenges/test-files"
  exit 1
fi

DIR="$1"

if [ ! -d "$DIR" ]; then
  echo "Error: Directory does not exist"
  exit 1
fi

declare -A COUNT

for file in "$DIR"/*; do
  [ -f "$file" ] || continue

  ext="${file##*.}"

  # Handle files without extension
  if [ "$file" = "$ext" ]; then
    ext="no_extension"
  fi

  mkdir -p "$DIR/$ext"
  mv "$file" "$DIR/$ext/"
  ((COUNT[$ext]++))
done

# Print summary
for ext in "${!COUNT[@]}"; do
  echo "Organized ${COUNT[$ext]} .$ext files"
done

