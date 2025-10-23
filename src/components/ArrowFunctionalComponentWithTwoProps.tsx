type PropA = {
    title: string;
}

type PropB = {
    description: string;
}

type Props = PropA & PropB;
const ArrowFunctionalComponentWithTwoProps = ({title, description}:Props) => {
    return (
     <>
         <h1 className="font-bold mt-12 text-center text-xl mask-r-from-gray-300">{title}</h1>
         <p className="text-center text-sm text-gray-600">{description}</p>
     </>
    );
};

export default ArrowFunctionalComponentWithTwoProps;