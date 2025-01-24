<?php

namespace OptimistDigital\NovaDrafts;


use Laravel\Nova\Fields\Field;

class SimpleText extends Field
{
    public $component = 'simple-text'; // Nazwa komponentu Vue

    /**
     * Ustaw tekst dla komponentu.
     *
     * @param  string  $text
     * @return $this
     */
    public function text(string $text)
    {
        return $this->withMeta(['text' => $text]);
    }
}
