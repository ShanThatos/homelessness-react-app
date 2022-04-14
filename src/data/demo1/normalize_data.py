import json

def main():
    lines = readUntilEmpty("./demo1_data.txt")
    
    def normalizeLine(line):
        x = line.replace(r"%", "").split(" ")
        return " ".join(x[:-3]), int(x[-3]), int(x[-2]), int(x[-1])
        # x = line.split(" ")
        # return " ".join(x[:-3]), x[-3], x[-2], x[-1]
    
    data = [normalizeLine(line) for line in lines]
    
    linechart = { 
        "name": "Percent Reporting Experiences with Homelessness", 
        "chart_type": "line",
        "xaxis": {
            "name": "Age", 
            "labels": ["Age 17", "Age 19", "Age 21"]
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
