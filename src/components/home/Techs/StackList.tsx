import { stacks } from "./stack";
import Container from "../Container";
import Subtitle from "../Subtitle";
import style from "./StackList.module.css";

const StackList = () => {
  return (
    <>
      <Subtitle>Stacks</Subtitle>
      <Container variant="1/3">
        <ul className={style.list}>
          {stacks.map((stack) => {
            return (
              <li className={style.item} key={stack.name}>
                <span className={style.icon}>{stack.icon}</span>
                <p>{stack.name}</p>
              </li>
            );
          })}
        </ul>
      </Container>
    </>
  );
};

export default StackList;
