---
source_pdf: "https://drive.google.com/file/d/1cdPnJMz8XdYdjzOQPcs76M9BM8bnkIZW/view"
drive_folder: "Research"
type: research

ingested: 2025-12-27
original_filename: "Centaur YC Demo Day Deck (with appendix).pdf"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/1cdPnJMz8XdYdjzOQPcs76M9BM8bnkIZW/view)

## Slide 1: Labeling medical images at scale

![Centaur Labs Logo: A stylized, abstract horse head with "Centaur Labs" text beside it.](image.png)

Centaur
Labs

Labeling medical images at scale

## Slide 2: What We're Solving

*   To train medical AI, you need huge datasets with accurate labels
*   Hiring doctors to label is expensive and hard to scale

## Slide 3: Our App: DiagnosUs

*   Doctors label medical images to improve their skills and compete with others
*   We can label millions of images for almost free

## Slide 4: Why It Works

*   High volume means we're fast and cheap
*   We trust our users based on performance, not credentials
*   We get many opinions on each case

## Slide 5: On track to analyze 2.2 million images this month

### Images Analyzed per Month

| Month | Images Analyzed |
| :---- | :-------------- |
| Dec   | 200,000         |
| Jan   | 150,000         |
| Feb   | 600,000         |
| Mar   | 2,200,000       |

12x growth during YC

## Slide 6: Pilots and LOIs

*   Dermatology (with LEO Pharma)
*   Gastroenterology
*   Dentistry
*   EEG

## Slide 7: Future Vision

Today we're labeling training data.

In the future, we will provide second opinions for both patients and doctors.

## Slide 8: Team

*   Erik Duhaime
*   Zach Rausnitz
*   Tom Gellatly

*   MIT PhD in Collective Intelligence
*   Two full-stack engineers
*   Head of data labeling at Cruise
*   Friends for 10 years

![MIT logo](image.png)
Massachusetts
Institute of
Technology

![Cruise logo](image.png)
cruise

## Slide 9: Centaur Labs Summary

![Centaur Labs Logo: A stylized, abstract horse head with "Centaur Labs" text beside it.](image.png)
Centaur
Labs

Labeling medical images at scale

*   Analyzing 2.2 million images per month
*   Pilots in dermatology, GI, dentistry, EEG
*   Team from MIT and Cruise

## Slide 10: appendix

## Slide 11: Unsolicited Feedback From DiagnosUs Users

"I love this app and I'm very impressed with the quick responses and always keeping your users informed. Keep it going!"

"Also wanted to take a moment to say what a cool app this is and that I'm really enjoying it."

"I love your app. I feel like I'm able to take breaks from intense study and work to do something fun, but that also allows me to learn and hone skills."

## Slide 12: Unsolicited Feedback From DiagnosUs Users

"Hello there, recent downloaded of the app, I'm a radiological technologist and loving the app. I have a correction for you! This is most definitely an abnormal chest!"

"Im applying to med school now. I absolutly love this app. Better than flash cards and gives fantastic exposure to the images i will be seeing in medschool. Keep it going!!!!!"

"Great app, fabulous learning tool, fantastic system, extraordinary prizes, everything is perfect"

## Slide 13: SO WHAT HAPPENS WHEN THE ALGORITHMS ARE BETTER THAN DOCTORS?

## Slide 14: TECHNOLOGY DOES NOT REPLACE WORK. IT CHANGES HOW WORK IS ORGANIZED.

![Image of several workers on an assembly line, assembling an engine.](image.png)

## Slide 15: AGE OF THE CENTAURS

![Image of a chess tournament where players are using both physical chess boards and laptops.](image.png)

"Weak human + machine + better process was superior to a strong computer alone and, more remarkably, superior to a strong human + machine + inferior process."
- Garry Kasparov

## Slide 16: SKIN CANCER CASE STUDY (from Erik's PhD research)

![Grid of medical images showing various skin lesions.](image.png)

**Benign**
*   **Epidermal lesions:** (4 examples)
*   **Melanocytic lesions:** (4 examples)
*   **Melanocytic lesions (dermoscopy):** (4 examples)

**Malignant**
*   **Epidermal lesions:** (4 examples)
*   **Melanocytic lesions:** (4 examples)
*   **Melanocytic lesions (dermoscopy):** (4 examples)

## Slide 17: DERMATOLOGIST LEVEL CLASSIFICATION OF SKIN CANCER

**Chart: All 371 Skin Lesion Images (ROC Curve)**

*   **X-axis:** False positive rate (0.0 to 1.0)
*   **Y-axis:** True positive rate (0.0 to 1.0)
*   **Algorithm:** Blue line, AUC = 0.96224
*   **Dermatologists:** Red dots representing individual dermatologists' performance.
*   **Average Dermatologist:** Green cross representing the average performance of dermatologists.

## Slide 18: PEOPLE AND COMPUTERS SEE PROBLEMS DIFFERENTLY

![Grid of images showing examples where muffins look like chihuahuas.](image.png)

## Slide 19: PEOPLE AND COMPUTERS SEE PROBLEMS DIFFERENTLY [2]

![Grid of images showing examples where fried chicken looks like poodles.](image.png)

## Slide 20: PEOPLE AND COMPUTERS SEE PROBLEMS DIFFERENTLY [3]

![Grid of images showing examples where bagels look like sleeping puppies.](image.png)

## Slide 21: PEOPLE AND COMPUTERS SEE PROBLEMS DIFFERENTLY [4]

![Grid of images showing examples where towels look like Shar Pei dogs.](image.png)

## Slide 22: PEOPLE AND COMPUTERS SEE PROBLEMS DIFFERENTLY [5]

![Grid of images showing examples where kittens look like ice cream with caramel.](image.png)

## Slide 23: PEOPLE AND COMPUTERS SEE PROBLEMS DIFFERENTLY

![Grid of medical images showing various skin lesions. This is a repeat of slide 16's image, used in a different context.](image.png)

**Benign**
*   **Epidermal lesions:** (4 examples)
*   **Melanocytic lesions:** (4 examples)
*   **Melanocytic lesions (dermoscopy):** (4 examples)

**Malignant**
*   **Epidermal lesions:** (4 examples)
*   **Melanocytic lesions:** (4 examples)
*   **Melanocytic lesions (dermoscopy):** (4 examples)

## Slide 24: INDIVIDUAL DERMATOLOGIST CENTAURS VS. CNN ALONE

**Chart: All 371 Images (ROC Curve)**

*   **X-axis:** False positive rate (0.0 to 1.0)
*   **Y-axis:** True positive rate (0.0 to 1.0)
*   **Algorithm:** Blue line, AUC = 0.9622
*   **Dermatologists:** Red dots representing individual dermatologists' performance.
*   **Average Dermatologist:** Green cross representing the average performance of dermatologists.
*   **50/50 Model (Average AUC = .9554):** Light red lines/dots (implicitly the centaurs).

*   We create centaurs with the 50/50 model (Blattberg and Hoch, 1990)
*   Only 7 of 21 individual dermatologist centaurs outperform the CNN alone.
*   On average, they achieve lower accuracy than the CNN alone (t(20) = -2.84, p = .01)
*   In short, this is because there is a decision authority problem (i.e., when human and AI disagree, human overrides by default)

## Slide 25: Diagnostic Accuracy of Human Groups vs. "Centaur" Groups

**Chart: Diagnostic Accuracy of Human Groups vs. "Centaur" Groups (AUC vs. Number of Doctors)**

*   **X-axis:** Number of Doctors (0 to 20)
*   **Y-axis:** Area Under the Curve (AUC) (0.85 to 0.97)
*   **Algorithm Only:** Black horizontal line (approx 0.965 AUC)
*   **Centaur:** Red line (starts at 0.965, slightly increases, then flattens around 0.97)
*   **Doctors Only:** Cyan line (starts low, increases steeply, then flattens around 0.955)

*   The difference is substantive: At a sensitivity of 99% the model achieves a false positive rate less than half that of the CNN alone (~20% vs. 45%)
*   These are still only linear aggregations. By using ML to combine human opinions with each other and with AI, we can increase accuracy even more

## Slide 26: Improving Complementarity

Most of the doctors approached the problem in a similar way...

By changing things like the training and incentives of our users, we can get even lightly-trained laypersons to better complement the CNN than the professional dermatologists.

**Chart: All 371 Skin Lesion Images (ROC Curve) with highlighted area**

*   **X-axis:** False positive rate (0.0 to 1.0)
*   **Y-axis:** True positive rate (0.0 to 1.0)
*   **Algorithm:** Blue line, AUC = 0.96224
*   **Dermatologists:** Red dots representing individual dermatologists' performance.
*   **Average Dermatologist:** Green cross representing the average performance of dermatologists.
*   A blue rectangle highlights the cluster of dermatologist performance (red dots and green cross) in the upper-left quadrant of the ROC curve, indicating a region of high true positive rate and low false positive rate.