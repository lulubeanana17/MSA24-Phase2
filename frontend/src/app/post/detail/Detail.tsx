import FormInputs from "@/app/post/detail/FormInputs";

interface RequestDetailProps {
  value: boolean
}

export const RequestDetail = ({value}: RequestDetailProps) => {
  return (
    <div>
      <FormInputs value={value} />
    </div>
  );
};
