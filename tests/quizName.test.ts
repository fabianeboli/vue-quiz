import { describe, expect, test } from "vitest";
import { shallowMount } from "@vue/test-utils";
import QuizName from "~/pages/[quizName]/[id].vue";

const questionOptions = {
  question: {
    title: 'Nuxt 3',
    question: 'Nuxt 3 is a new framework for Vue.js. It provides a new way to build your application, with a more modern and efficient approach.',
    type: 'radio',
    image: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    options: [
      {
        id: 1,
        text: 'Yes'
      },
      {
        id: 2,
        text: 'No'
      }
    ]
  }
}

describe('quizName', () => {
  test('should match snapshot', () => {
    const wrapper = shallowMount(QuizName);

    expect(wrapper.html()).toMatchSnapshot();
  })

  test('should display correct question', () => {
    const wrapper = shallowMount(QuizName, {
      data: () => (questionOptions)
    });
    expect(wrapper.html()).toContain('Nuxt 3');
    expect(wrapper.html()).toContain('Nuxt 3 is a new framework for Vue.js. It provides a new way to build your application, with a more modern and efficient approach.');
    expect(wrapper.html()).toContain('Yes');
    expect(wrapper.html()).toContain('No');
    expect(wrapper.html()).toContain('https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80');
    expect(wrapper.html()).toContain('radio');
    expect(wrapper.html()).toContain('question');
    expect(wrapper.html()).toContain('options');
    expect(wrapper.html()).toContain('title');
  });

  test('after clicking answer button while there is selected answer should reveal options correctness', () => {
    const wrapper = shallowMount(QuizName, {
      data: () => (questionOptions)
    });

    const button = wrapper.find('[data-testid="answer"]');
    const correctAnswer = wrapper.find('button:caintainsOwn("Yes")');
    const wrongAnswer = wrapper.find('button:caintainsOwn("No")');

    correctAnswer.trigger('click');
    expect(correctAnswer.classes()).toContain('bg-sky-300/60');

    button.trigger('click');
    expect(correctAnswer.classes()).toContain('bg-green-500');
    expect(wrongAnswer.classes()).toContain('bg-red-500');
  })

  test('answer button should be disabled before clicking an option', () => {
    const wrapper = shallowMount(QuizName, {
      data: () => (questionOptions)
    })

    const button = wrapper.find('[data-testid="answer"]');
    expect(button.attributes().disabled).toBeTruthy();
  })
})
