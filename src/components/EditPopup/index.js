import classNames from 'classnames/bind';
import styles from './EditPopup.module.scss';

import { useForm } from 'react-cool-form';

const cx = classNames.bind(styles);

function EditPopup(props) {
    const { form, use } = useForm({
        defaultValues: { firstName: '', lastName: '', framework: '' },
        onSubmit: (values) => alert(JSON.stringify(values, undefined, 2)),
    });
    const errors = use('errors');
    return props.trigger ? (
        <div className={cx('popup')}>
            <div className={cx('popup-inner')}>
                <button
                    className={cx('btn-close')}
                    onClick={() => props.setTrigger(false)}
                >
                    Close
                </button>

                <form ref={form} noValidate>
                    <h3>EDIT AIP</h3>
                    {/* <div className={cx('count')}>Render {count} times</div> */}
                    {/* First name */}
                    <div>
                        <label for="firstName">First name</label>
                        <input
                            name="firstName"
                            placeholder="First name"
                            required
                        />
                        {errors.firstName && <p>{errors.firstName}</p>}
                    </div>
                    {/* Last name */}
                    <div>
                        <label for="lastName">Last name</label>
                        <input
                            name="lastName"
                            placeholder="Last name"
                            required
                        />
                        {errors.lastName && <p>{errors.lastName}</p>}
                    </div>
                    {/* Date of birth */}
                    <div>
                        <label for="date">Date of birth</label>
                        <input
                            name="date"
                            placeholder="Date of birth"
                            required
                        />
                        {errors.lastName && <p>{errors.lastName}</p>}
                    </div>
                    {/* CCCD */}
                    <div>
                        <label for="cccd">CCCD</label>
                        <input name="cccd" placeholder="CCCD" required />
                        {errors.lastName && <p>{errors.lastName}</p>}
                    </div>
                    {/* Phone number */}
                    <div>
                        <label for="phone">Phone number</label>
                        <input
                            name="phone"
                            placeholder="Phone number"
                            required
                        />
                        {errors.lastName && <p>{errors.lastName}</p>}
                    </div>
                    {/* Address */}
                    <div>
                        <label for="address">Address</label>
                        <input name="address" placeholder="Address" required />
                        {errors.lastName && <p>{errors.lastName}</p>}
                    </div>

                    {/* Health condition */}
                    <div>
                        <label for="health">Health condition</label>
                        <input name="health" placeholder="CCCD" required />
                        {errors.lastName && <p>{errors.lastName}</p>}
                    </div>
                    {/* <select name="framework">
                        <option value="">I'm interesting in...</option>
                        <option value="react">React</option>
                        <option value="vue">Vue</option>
                        <option value="angular">Angular</option>
                        <option value="svelte">Svelte</option>
                    </select> */}
                    <input type="submit" />
                </form>
            </div>
        </div>
    ) : (
        ''
    );
}

export default EditPopup;
