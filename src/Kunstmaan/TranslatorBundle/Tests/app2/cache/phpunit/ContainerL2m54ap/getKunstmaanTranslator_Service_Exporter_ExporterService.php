<?php

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.
// Returns the private 'kunstmaan_translator.service.exporter.exporter' shared service.

$this->services['kunstmaan_translator.service.exporter.exporter'] = $instance = new \Kunstmaan\TranslatorBundle\Service\Command\Exporter\Exporter();

$instance->setExporters(array('yml' => ${($_ = isset($this->services['kunstmaan_translator.service.exporter.yaml']) ? $this->services['kunstmaan_translator.service.exporter.yaml'] : $this->services['kunstmaan_translator.service.exporter.yaml'] = new \Kunstmaan\TranslatorBundle\Service\Command\Exporter\YamlFileExporter()) && false ?: '_'}));

return $instance;
