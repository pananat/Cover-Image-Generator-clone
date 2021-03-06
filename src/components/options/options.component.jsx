import React, { useContext } from 'react';

import { defaultSettings } from '../../contexts/settings.utils';
import SettingsContext from '../../contexts/settings.context.js';
import FontOptions from '../font-options/font-options.component';
import CanvasProperties from '../canvas-properties/canvas-properties.component';
import './options.styles.scss';
import ImageOptions from '../image-options/image-options.components';
import BackgroundOptions from '../background-options/background-options.component';

const Options = ({ updateSettings, massUpdateSettings }) => {
	const settings = useContext(SettingsContext);

	const changeSettings = (name, value) => updateSettings(name, value);
	const insertImage = e => changeSettings('images', [...settings.images, `/icons/${e}`]);
	const handleChange = e => changeSettings([e.target.name], e.target.value);

	const handleImage = async e => {
		const name = [e.target.name];
		if (e.target.files[0]) {
			var reader = new FileReader();
			reader.onload = e => {
				const value = [...settings.images, e.target.result];
				changeSettings([name], value);
			};
			reader.readAsDataURL(e.target.files[0]);
		}
	};

	return (
		<div className="options">
			<h4>Options</h4>

			<CanvasProperties
				defaultSettings={defaultSettings}
				handleChange={handleChange}
				massUpdateSettings={massUpdateSettings}
				changeSettings={updateSettings}
			/>
			<BackgroundOptions
				defaultSettings={defaultSettings}
				handleChange={handleChange}
				changeSettings={updateSettings}
			/>

			<FontOptions
				defaultSettings={defaultSettings}
				handleChange={handleChange}
				changeSettings={updateSettings}
			/>

			<ImageOptions handleImage={handleImage} insertImage={insertImage} />
		</div>
	);
};
export default Options;
