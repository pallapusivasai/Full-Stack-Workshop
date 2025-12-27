#!/bin/bash

SRC="$1"
DEST="$2"

if [ -z "$SRC" ] || [ -z "$DEST" ]; then
  echo "Usage: $0 /path/to/source /path/to/backup-dest"
  exit 1
fi

if [ ! -d "$SRC" ]; then
  echo "Source directory does not exist"
  exit 1
fi

mkdir -p "$DEST"

TIMESTAMP=$(date "+%Y%m%d-%H%M%S")
BACKUP_FILE="$DEST/backup-$TIMESTAMP.tar.gz"

tar -czf "$BACKUP_FILE" -C "$SRC" .

# Keep only last 5 backups
ls -1t "$DEST"/backup-*.tar.gz | tail -n +6 | xargs -r rm -

SIZE=$(du -h "$BACKUP_FILE" | cut -f1)

echo "Backup completed: $BACKUP_FILE"
echo "Backup size: $SIZE"
