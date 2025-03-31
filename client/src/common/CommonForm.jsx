import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";



const CommonForm = ({ formControls, formData, setFormData, onSubmit, buttonText }) => {

    function renderInputsByComponentType(getformControls) {
        let element = null;
        const value = formData[getformControls.name] || '';

        switch (getformControls.componentType) {
            case 'input':
                element = (
                    <Input
                        name={getformControls.name}
                        id={getformControls.name}
                        placeholder={getformControls.placeholder}
                        type={getformControls.type}
                        value={value}
                        onChange={event => setFormData({
                            ...formData,
                            [getformControls.name]: event.target.value
                        })}
                        className='w-full placeholder-black dark:text-black px-3 py-2 bg-white border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary autocomplete'
                    />
                )
                break;

            case 'select':
                element = (
                    <Select
                        onValueChange={(value) => setFormData({
                            ...formData,
                            [getformControls.name]: value,
                        })}
                        value={value}
                    >
                        <SelectTrigger className="w-full select-component">
                            <SelectValue placeholder={getformControls.label} />
                        </SelectTrigger>
                        <SelectContent className='bg-black text-amber-50'>
                            {
                                getformControls.options && getformControls.options.length > 0 ?
                                    getformControls.options.map(option => (
                                        <SelectItem key={option.id} value={option.id}>
                                            {option.label}
                                        </SelectItem>
                                    )) : null}

                        </SelectContent>
                    </Select>
                )

                break;

            case 'textarea':
                element = (
                    <textarea
                        name={getformControls.name}
                        placeholder={getformControls.placeholder}
                        id={getformControls.name}
                        value={value}
                        onChange={event => setFormData({
                            ...formData,
                            [getformControls.name]: event.target.value
                        })}
                        className="w-full placeholder-black px-3 py-2 bg-white dark:text-black border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                        rows={4}
                    />
                )

                break;

            default:
                element = (
                    <Input
                        name={getformControls.name}
                        id={getformControls.name}
                        placeholder={getformControls.placeholder}
                        type={getformControls.type}
                        value={value}
                        onChange={event => setFormData({
                            ...formData,
                            [getformControls.name]: event.target.value
                        })}
                        className='w-full placeholder-black dark:text-black px-3 py-2 bg-white border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary autocomplete'
                    />
                )
                break;

        }
        return element;
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="flex flex-col gap-3">
                {
                    formControls.map((controlItem) =>
                        <div className="grid gap-1.5 w-full" key={controlItem.name}>
                            <Label className='mb-1 float-left font-medium'>{controlItem.label}</Label>
                            {renderInputsByComponentType(controlItem)}
                        </div>
                    )
                }
            </div>
            {
                buttonText ?
                    <Button className='px-4 py-2 bg-black text-white hover:bg-white hover:text-black dark:bg-purple-600 dark:text-white dark:hover:bg-white dark:hover:text-black'>{buttonText}</Button>
                    : null

            }
        </form>
    )
}

export default CommonForm
