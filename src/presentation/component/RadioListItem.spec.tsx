import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { radioListApp } from '@/business/mock/radio/radioListApp';
import RadioListItem from '@/presentation/component/RadioListItem';

test('RadioListItem', () => {
    render(<RadioListItem radio={radioListApp} />);

    expect(screen.getAllByText(radioListApp.name)).toBeDefined();

    // radioListApp.genre.forEach((genre) => {
    //     expect(screen.getAllByText(genre)).toBeDefined();
    // });
});
