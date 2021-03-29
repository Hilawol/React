import Paragraph from './Paragraph';

const Text = () => {

  const text = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, assumenda fuga nam in dolore ipsum sunt eligendi magnam libero adipisci quos voluptates dignissimos dicta expedita quasi, repellendus velit explicabo quaerat vel odio eveniet, quisquam enim perspiciatis quod. Accusantium consequuntur eaque ullam suscipit. Sint deserunt voluptatibus maiores, suscipit porro consequatur magnam."
  const max = 20;
  return (
    <Paragraph text={text} max={max} />
  );

}

export default Text