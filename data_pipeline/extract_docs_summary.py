import sys
import pypdf
import os

sys.stdout.reconfigure(encoding='utf-8')

# 1. SampleDataPack_Explanation.pdf
print("=== 1. SampleDataPack_Explanation.pdf ===")
reader = pypdf.PdfReader("data_pipeline/data/SampleDataPack_Explanation.pdf")
print(f"Total pages: {len(reader.pages)}")
for i, page in enumerate(reader.pages):
    print(f"\n--- PAGE {i+1} ---")
    print(page.extract_text())

# 2. Webportal User Guide
print("\n=== 2. Webportal User Guide & Portal Data Dictionaries (First 80 lines) ===")
with open("data_pipeline/data/Webportal_UserGuide_Portal_Data_Dictionaries.txt", "r", encoding="utf-8") as f:
    lines = f.readlines()
print(f"Total lines: {len(lines)}")
for line in lines[:80]:
    print(line, end="")

# 3. SpenglerCup_Event-Report-2025.pdf
print("\n=== 3. SpenglerCup_Event-Report-2025.pdf ===")
reader3 = pypdf.PdfReader("data_pipeline/data/SpenglerCup_Event-Report-2025.pdf")
print(f"Total pages: {len(reader3.pages)}")
for i in range(min(4, len(reader3.pages))):
    print(f"\n--- PAGE {i+1} ---")
    print(reader3.pages[i].extract_text()[:600])
