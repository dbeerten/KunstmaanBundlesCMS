<?php

namespace Kunstmaan\PagePartBundle\Tests\Entity;

use Kunstmaan\PagePartBundle\Entity\ToTopPagePart;

/**
 * Generated by PHPUnit_SkeletonGenerator on 2012-08-20 at 14:35:32.
 */
class ToTopPagePartTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @var ToTopPagePart
     */
    protected $object;

    /**
     * Sets up the fixture, for example, opens a network connection.
     * This method is called before a test is executed.
     */
    protected function setUp()
    {
        $this->object = new ToTopPagePart();
    }

    /**
     * Tears down the fixture, for example, closes a network connection.
     * This method is called after a test is executed.
     */
    protected function tearDown()
    {
    }

    /**
     * Generated from @assert () == 'ToTopPagePart'.
     *
     * @covers                \Kunstmaan\PagePartBundle\Entity\ToTopPagePart::__toString
     */
    public function testToString()
    {
        $this->assertEquals('ToTopPagePart', $this->object->__toString());
    }

    /**
     * Generated from @assert () == 'KunstmaanPagePartBundle:ToTopPagePart:view.html.twig'.
     *
     * @covers                \Kunstmaan\PagePartBundle\Entity\ToTopPagePart::getDefaultView
     */
    public function testGetDefaultView()
    {
        $this->assertEquals('KunstmaanPagePartBundle:ToTopPagePart:view.html.twig', $this->object->getDefaultView());
    }

    /**
     * @covers \Kunstmaan\PagePartBundle\Entity\ToTopPagePart::getDefaultAdminType
     */
    public function testGetDefaultAdminType()
    {
        $this->assertEquals('Kunstmaan\PagePartBundle\Form\ToTopPagePartAdminType', $this->object->getDefaultAdminType());
    }
}
