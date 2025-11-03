import * as D from "../data";
import { Title, Subtitle, Paragraph} from "../components";

const paragraphs = D.makeArray(2).map(D.randomParagraphs).join("\n\n");
export default function TextsTest() {
  return (
    <div>
      <Title>TextsTest</Title>
      <div>
        <Title className="text-blue-600">{D.randomTitleText()}</Title>
        <Subtitle className="text-blue-400">{D.randomSentence()}</Subtitle>
        <Paragraph numberOfLines={5}>{paragraphs}</Paragraph>
      </div>
    </div>
  );
}