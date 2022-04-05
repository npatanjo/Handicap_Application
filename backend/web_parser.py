

from bs4 import BeautifulSoup
import requests
import re


def main():
    html = get_html("https://ncrdb.usga.org/courseTeeInfo.aspx?CourseID=2711")
    print(html)
    pass









def get_html(url):
    return requests.get(url).text
    pass

def scrape_html(html):
    pass




if __name__ == "__main__":
    main()
