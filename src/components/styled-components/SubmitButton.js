
import tw from 'tailwind-styled-components';

const SubmitButton = tw.button`
${(p) => (p.$valid ? 'text-white bg-indigo-500' : 'text-black bg-gray-500')}
flex 
mx-auto  
border-0 
py-2 
px-8 
rounded 
text-lg
`;
export default SubmitButton;
