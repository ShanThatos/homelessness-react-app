import json

def main():
    lines = readUntilEmpty("./demo1_data.txt")
    
    def normalizeNumToPercent(numStr):
        return {"v": int(numStr), "f": f"{int(numStr)}%"}
    def normalizeLine(line):
        x = line.replace(r"%", "").split(" ")
        return " ".join(x[:-3]), *[normalizeNumToPercent(x) for x in x[-3:]]
        # x = line.split(" ")
        # return " ".join(x[:-3]), x[-3], x[-2], x[-1]
    
    data = [normalizeLine(line) for line in lines]
    
    linechart = { 
        "name": "Percent Reporting Experiences with Homelessness", 
        "chart_type": "line",
        "xaxis": {
            "name": "Age", 
            "labels": ["Age 17 (FY 2014)", "Age 19 (FY 2016)", "Age 21 (FY 2018)"]
        }, 
        "yaxis": {
            "name": "Percent Homeless"
        },
        "lines": [
            {
                "name": line[0],
                "data": line[1:]
            } for line in data
        ], 
        "google_chart_data": []
    }
    linechart["google_chart_data"] = [["Age", *[line["name"] for line in linechart["lines"]]]]
    linechart["google_chart_data"].extend([lbl, *[line["data"][i] for line in linechart["lines"]]] for i, lbl in enumerate(linechart["xaxis"]["labels"]))
    
    json.dump(linechart, open("demo1_linechart.json", "w"), indent=2)



def readUntilEmpty(fileName):
    lines = []
    with open(fileName, "r") as f:
        while True:
            line = f.readline().strip()
            if line == "":
                break
            lines.append(line)
    return lines

if __name__ == "__main__":
    main()
