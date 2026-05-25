class RecognitionLog {
  constructor(id, personLabel, confidence, recognizedAt) {
    this.id = id;
    this.personLabel = personLabel;
    this.confidence = confidence;
    this.recognizedAt = recognizedAt;
  }
}
module.exports = RecognitionLog;
