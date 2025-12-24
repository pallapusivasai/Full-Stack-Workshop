```
$ ./log_analyzer.sh
================ Log Analysis Report ================
File: /d/Revature_Training/Day-1/linux/sample_log.txt
Total lines   : 50
-----------------------------------------------------

Errors       : 6
Warnings     : 7
Info         : 37

=== Recent Errors (Last 5) ===
2024-01-15 08:18:22 ERROR File not found: /var/data/config.xml
2024-01-15 08:38:22 ERROR Authentication failed for user admin from 203.0.113.50
2024-01-15 08:50:22 ERROR Service unavailable: payment-gateway
2024-01-15 09:08:44 ERROR Database query timeout: SELECT * FROM orders
2024-01-15 09:28:12 ERROR External API rate limit exceeded
```

# 1. Log Analysis Shell Script – Notes (MD)

This file explains **what the script does**, **main discussion points**, and **commands used during execution**. It is suitable for **Linux basics / interview / assignment**.

---

## 1.1. Table of Contents

- [1. Log Analysis Shell Script – Notes (MD)](#1-log-analysis-shell-script--notes-md)
  - [1.1. Table of Contents](#11-table-of-contents)
  - [1.2. Script Purpose](#12-script-purpose)
  - [1.3. Main Logic Flow](#13-main-logic-flow)
  - [1.4. Code (With Key Notes)](#14-code-with-key-notes)
  - [1.5. Commands Used \& Their Role](#15-commands-used--their-role)
  - [1.6. How to Execute the Script](#16-how-to-execute-the-script)
    - [1.6.1. Run with verbose mode](#161-run-with-verbose-mode)
    - [1.6.2. Use custom log file](#162-use-custom-log-file)
  - [1.7. Interview One‑Line Explanation](#17-interview-oneline-explanation)

---

## 1.2. Script Purpose

- Analyze a log file
- Count total log lines
- Count `ERROR`, `WARNING`, and `INFO` messages
- Support **verbose mode** to print each log line with labels
- Show **last 5 recent errors**

---

## 1.3. Main Logic Flow

1. Set log file path (default if not provided)
2. Check whether the log file exists
3. Count total number of log entries
4. Count error, warning, and info logs
5. Handle empty file safely
6. Print a summary report
7. If verbose mode is enabled:
   - Read file line by line
   - Categorize each log
8. Display last 5 error messages

---

## 1.4. Code (With Key Notes)

```sh
LOG_FILE=${LOG_FILE:-"/d/Revature_Training/Day-1/linux/sample_log.txt"}
```
- Uses default log file if `LOG_FILE` is not already set

```sh
if [ ! -f "$LOG_FILE" ]; then
    echo "Error: Log file not found: $LOG_FILE"
    exit 1
fi
```
- `-f` checks file existence
- Script exits if file is missing

```sh
TOTAL_LOGS=$(wc -l < "$LOG_FILE")
```
- `wc -l` counts total lines in the file

```sh
ERROR_COUNT=$(grep -ci "error" "$LOG_FILE")
WARN_COUNT=$(grep -ci "warning" "$LOG_FILE")
INFO_COUNT=$(grep -ci "info" "$LOG_FILE")
```
- `grep -c` → count matches
- `-i` → ignore case

```sh
if [ "$TOTAL_LOGS" -eq 0 ]; then
    echo "No logs found."
    exit 0
fi
```
- Prevents processing empty files

```sh
echo "================ Log Analysis Report ================"
echo "File: $LOG_FILE"
echo "Total lines   : $TOTAL_LOGS"
echo "Errors       : $ERROR_COUNT"
echo "Warnings     : $WARN_COUNT"
echo "Info         : $INFO_COUNT"
```
- Prints summary report

```sh
if [ "$VERBOSE" = true ]; then
```
- Enables verbose output when `VERBOSE=true`

```sh
while read -r line; do
    if echo "$line" | grep -iq "error"; then
        echo "[ERROR] $line"
    elif echo "$line" | grep -iq "warning"; then
        echo "[WARNING] $line"
    elif echo "$line" | grep -iq "info"; then
        echo "[INFO] $line"
    else
        echo "[OTHER] $line"
    fi
done < "$LOG_FILE"
```
- Reads log file line by line
- Classifies each log message

```sh
grep -i "error" "$LOG_FILE" | tail -5
```
- Displays last 5 error logs

---

## 1.5. Commands Used & Their Role

| Command | Purpose |
|-------|--------|
| `wc -l` | Count number of lines |
| `grep` | Search text in file |
| `grep -c` | Count matching lines |
| `grep -i` | Ignore case sensitivity |
| `tail -5` | Show last 5 lines |
| `read -r` | Read file line by line |
| `exit` | Stop script execution |

---

## 1.6. How to Execute the Script

```sh
chmod +x log_analyzer.sh
./log_analyzer.sh
```

### 1.6.1. Run with verbose mode

```sh
VERBOSE=true ./log_analyzer.sh
```

### 1.6.2. Use custom log file

```sh
LOG_FILE=/tmp/app.log ./log_analyzer.sh
```

---

## 1.7. Interview One‑Line Explanation

> "This shell script analyzes a log file, counts different log levels, supports verbose output, and displays recent errors using standard Linux commands like grep, wc, and tail."

