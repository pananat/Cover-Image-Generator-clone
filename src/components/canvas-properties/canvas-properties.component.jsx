import React, { useState } from 'react';
import { Toggle } from 'react-powerplug';
import { Plus, Minus } from 'react-feather';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

import LabelOption from '../label-option/label-option.component';
import NumberInput from '../number-input/number-input.component';
import ColorPicker from '../color-picker/colorpicker.component';
import './canvas-properties.styles.scss';

const CanvasProperties = ({ handleChange, defaultSettings, changeSettings }) => {
	const [radius, setRadius] = useState(defaultSettings.radius);
	const { width, height, border, borderColor, bgUrl } = defaultSettings;

	return (
		<Toggle initial={false}>
			{({ on, toggle }) => (
				<>
					<div className="toggle" onClick={toggle} checked={on}>
						{on ? <Minus size="12" /> : <Plus size="12" />} Canvas Properties
					</div>
					{on && (
						<>
							<LabelOption name="Width">
								<NumberInput handleChange={handleChange} name="width" defaultValue={width} />
							</LabelOption>

							<LabelOption name="Height">
								<NumberInput handleChange={handleChange} name="height" defaultValue={height} />
							</LabelOption>

							<div>
								<h5>Background Image URL</h5>
								<input
									type="url"
									placeholder="Background Image URL"
									onChange={handleChange}
									name="bgUrl"
								/>
							</div>

							<LabelOption name="Border">
								<NumberInput handleChange={handleChange} name="border" defaultValue={border} />
							</LabelOption>

							<LabelOption name="Border Color">
								<ColorPicker
									defaultValue={borderColor}
									changeSettings={changeSettings}
									name="borderColor"
								/>
							</LabelOption>

							<div>
								<h5>Border Radius</h5>
								<InputRange
									className="slider"
									maxValue={100}
									minValue={0}
									value={radius}
									onChange={value => {
										setRadius(value);
										changeSettings('radius', value);
									}}
								/>
							</div>
						</>
					)}
				</>
			)}
		</Toggle>
	);
};

export default CanvasProperties;
