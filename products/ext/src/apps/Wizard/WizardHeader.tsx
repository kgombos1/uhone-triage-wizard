import { Button } from "../../base-components";
import { useWizard } from "react-use-wizard"

export const WizardHeader: React.FC = () => {
    const {nextStep, previousStep} = useWizard();

    return (
        <>
            <Button onClick={() => previousStep()}>prev</Button>
            <Button onClick={() => nextStep()}>next</Button>
        </>
    )
}