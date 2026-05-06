import py_compile
import os

repo_dir = r"c:\Users\DCN\Desktop\phish major"
for root, dirs, files in os.walk(repo_dir):
    for f in files:
        if f.endswith(".py"):
            path = os.path.join(root, f)
            try:
                py_compile.compile(path, doraise=True)
            except Exception as e:
                print(f"Syntax Error in {path}: {e}")
print("Syntax check complete.")
