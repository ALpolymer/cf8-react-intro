type CardProps = {
    title: string;
    children: React.ReactNode;
}
const Card = ({title, children}: CardProps) => {
    return (
  <>
      <div className="text-center border-2 border-gray-200 rounded-lg">
          <h2>{title}</h2>
          {children}

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, unde.</p>
      </div>
  </>
    );
};

export default Card;